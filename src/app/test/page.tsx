"use client";

import React, { useEffect, useState } from "react";
import crypto from "crypto";
import { UtilsService } from "@/services/utils.service";

let form: any = null;
export default function Test() {
    const [params, setParams] = useState({
        amount: "100",
        failure_url: "http://localhost:3000/checkout",
        product_delivery_charge: "0",
        product_service_charge: "0",
        product_code: "EPAYTEST",
        signature: "",
        signed_field_names: "total_amount,transaction_uuid,product_code",
        success_url: "http://localhost:3000/orders/success",
        tax_amount: "0",
        total_amount: "100",
        transaction_uuid: `heartwood-${UtilsService.generateOTP(6)}`,
    });
    const post = () => {
        form = document.createElement("form");
        form.setAttribute("method", "POST");
        form.setAttribute("target", "_blank");
        form.setAttribute(
            "action",
            "https://rc-epay.esewa.com.np/api/epay/main/v2/form",
        );

        for (const key in params) {
            const hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute(
                "value",
                params[key as keyof typeof params],
            ); // Add index signature
            form.appendChild(hiddenField);
        }

        document.body.appendChild(form);
    };

    useEffect(() => {
        post();
    });

    const checkStatus = async () => {
        const res = await fetch(
            `https://uat.esewa.com.np/api/epay/transaction/status/?product_code=EPAYTEST&total_amount=100&transaction_uuid=heartwood-000002`,
        );
    };

    const generateSignature = async () => {
        const message = `total_amount=${params.total_amount},transaction_uuid=${params.transaction_uuid},product_code=${params.product_code}`;
        const secret = "8gBm/:&EnhH.1/q";

        const hash = crypto
            .createHmac("sha256", secret)
            .update(message)
            .digest("base64");
        setParams({ ...params, signature: hash });
    };

    const handleSubmit = () => {
        form.submit();
    };

    return (
        <>
            <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-red-100">
                <p>transaction_uuid: {params.transaction_uuid}</p>
                <p>Hash: {params.signature}</p>
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
