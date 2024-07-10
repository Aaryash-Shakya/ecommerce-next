"use client";

import React, { useEffect, useState } from "react";
import crypto from "crypto";
import { UtilsService } from "@/services/utils.service";

let form: any = null;
export default function Test() {
    const [paymentParams, setPaymentParams] = useState({
        amount: "100.5",
        failure_url: "http://localhost:3000/checkout",
        product_delivery_charge: "0",
        product_service_charge: "0",
        product_code: "EPAYTEST",
        signature: "",
        signed_field_names: "total_amount,transaction_uuid,product_code",
        success_url: "http://localhost:3000/orders/success",
        tax_amount: "0",
        total_amount: "100.5",
        transaction_uuid: `heartwood-${UtilsService.generateOTP(6)}`,
    });
    useEffect(() => {
        const post = () => {
            form = document.createElement("form");
            form.setAttribute("method", "POST");
            form.setAttribute("target", "_blank");
            form.setAttribute(
                "action",
                "https://rc-epay.esewa.com.np/api/epay/main/v2/form",
            );

            for (const key in paymentParams) {
                const hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute(
                    "value",
                    paymentParams[key as keyof typeof paymentParams],
                ); // Add index signature
                form.appendChild(hiddenField);
            }

            document.body.appendChild(form);
        };

        post();
    }, [paymentParams]);

    const checkStatus = async () => {
        const res = await fetch(
            `https://uat.esewa.com.np/api/epay/transaction/status/?product_code=EPAYTEST&total_amount=100&transaction_uuid=heartwood-000002`,
        );
    };

    const generateSignature = async () => {
        const message = `total_amount=${paymentParams.total_amount},transaction_uuid=${paymentParams.transaction_uuid},product_code=${paymentParams.product_code}`;
        const secret = "8gBm/:&EnhH.1/q";

        const hash = crypto
            .createHmac("sha256", secret)
            .update(message)
            .digest("base64");
        setPaymentParams({ ...paymentParams, signature: hash });
    };

    const handleSubmit = () => {
        form.submit();
    };

    return (
        <>
            <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-red-100">
                <p>transaction_uuid: {paymentParams.transaction_uuid}</p>
                <p>Hash: {paymentParams.signature}</p>
                <button onClick={generateSignature} className="btn btn-primary">
                    Hash
                </button>
                <button onClick={handleSubmit} className="btn btn-primary">
                    Submit
                </button>
            </div>
        </>
    );
}
