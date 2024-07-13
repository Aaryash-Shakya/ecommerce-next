import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.category.createMany({
        data: [
            {
                id: 1,
                name: "chair",
            },
            {
                id: 2,
                name: "sofa",
            },
            {
                id: 3,
                name: "table",
            },
            {
                id: 4,
                name: "bed",
            },
        ],
    });

    await prisma.product.createMany({
        data: [
            {
                id: 1,
                categoryId: 2,
                name: "Uppland",
                price: 84900.0,
                description:
                    "You know the feeling when you sit, lie down or hang out in a sofa, rather than on it. That’s how embracing the deep and generous UPPLAND sofa is – your new favorite place for cozy evenings and lazy days!",
                image: "sofa/sofa-1",
                imageCount: 5,
                location: "living-room:office",
            },
            {
                id: 2,
                categoryId: 2,
                name: "Morabo",
                price: 69900.0,
                description:
                    "Seat cushions filled with high-resilience foam and polyester fiber wadding provide great seating comfort.\n\nThese wooden legs give MORABO sofa and armchair a warm and natural look.\n\nRemovable armrests make it easy to add on a chaise lounge.\n\nThis cover is made of dope-dyed Gunnared fabric in polyester. It is a durable fabric with a wool-like feel, a warm look and a two-toned mélange effect.",
                image: "sofa/sofa-2",
                imageCount: 5,
                location: "living-room:office",
            },
            {
                id: 3,
                categoryId: 2,
                name: "Linanas",
                price: 39900.0,
                description:
                    "With its soft shapes, modern expressions and durable dark cover, this sofa with a chaise is a perfect combination of function and comfort. Also comes without a chaise if you have less space.",
                image: "sofa/sofa-3",
                imageCount: 5,
                location: "living-room:office",
            },
            {
                id: 4,
                categoryId: 2,
                name: "Soderhamn",
                price: 57900.0,
                description:
                    "If you like the stylish airy look, you have to try the deep generous seats. Create your own personal combination of SÖDERHAMN sofa, then sit down and relax – by yourself or together with the whole family.",
                image: "sofa/sofa-4",
                imageCount: 5,
                location: "living-room:office",
            },
            {
                id: 5,
                categoryId: 2,
                name: "Harlanda",
                price: 114900.0,
                description:
                    "Cozy evenings, lazy days and nice socializing with family and friends – occasions when the super-comfy and deep HÄRLANDA sofa is perfect. You sink softly down and enjoy an embracing feeling in this sofa.",
                image: "sofa/sofa-5",
                imageCount: 5,
                location: "living-room:office",
            },
            {
                id: 6,
                categoryId: 2,
                name: "Kivik",
                price: 214900.0,
                description:
                    "Cuddle up in the comfortable KIVIK sofa. The generous size, low armrests and pocket springs with foam that adapts to the body invites you and your guests to many hours of socializing and relaxation.",
                image: "sofa/sofa-6",
                imageCount: 5,
                location: "living-room:office",
            },
            {
                id: 7,
                categoryId: 1,
                name: "Ekenaset",
                price: 24900.0,
                description:
                    "EKENÄSET armchair adds a stylish retro vibe to the room that is inspired by 1950s Scandinavian design. The classic look goes anywhere in the home – and gives you sturdy and robust seating for many years.",
                image: "chair/chair-1",
                imageCount: 5,
                location: "living-room:office:bedroom",
            },
            {
                id: 8,
                categoryId: 1,
                name: "Dyclinge",
                price: 19900.0,
                description:
                    'MILA swivel armchair was presented as the "anti-stress armchair" in our 1967 catalogue. A big success designed by Gillis Lundgren – now given new life with the name DYVLINGE in the Nytillverkad collection.',
                image: "chair/chair-2",
                imageCount: 5,
                location: "living-room:office:bedroom",
            },
            {
                id: 9,
                categoryId: 1,
                name: "Ostano",
                price: 2500.0,
                description:
                    "Comfy and sturdy chair with a metal frame, a soft seat and a nice backrest with a curved shape. All in a timeless, neat design with a modern twist that takes up little room – and at a price that surprises!",
                image: "chair/chair-3",
                imageCount: 5,
                location: "office:kitchen:living-room:study-room",
            },
            {
                id: 10,
                categoryId: 1,
                name: "Matchspel",
                price: 28900.0,
                description:
                    "MATCHSPEL gaming chair helps you play at the top of your game. Your whole body enjoys nice support and you can adjust the height of the chair, neck and armrests to sit really comfy when the game begins.",
                image: "chair/chair-4",
                imageCount: 5,
                location: "study-room:office:game-room",
            },
            {
                id: 11,
                categoryId: 1,
                name: "Utespelare",
                price: 19999.0,
                description:
                    "UTESPELARE gaming chair gives your body a nice support with a synchronized seat and back tilt that precisely follows your movements during the entire match. And after playing, you can sit back to recharge.",
                image: "chair/chair-5",
                imageCount: 5,
                location: "office:study-room:game-room",
            },
            {
                id: 12,
                categoryId: 1,
                name: "Huvudspelare",
                price: 8999.0,
                description:
                    "Adjust the height and angle to sit really comfortably, and let the game begin. The backrest gives you good lumbar support – and even when the game heats up, you stay cool thanks to the mesh net.",
                image: "chair/chair-6",
                imageCount: 5,
                location: "office:study-room:game-room",
            },
        ],
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
