import { useState } from "react"

function Star({ stars }: { stars: number[] }) {
    return (
        <div>
            {
                stars.map((star, index) => {
                    return (
                        <span key={index}>
                            {star}
                        </span>
                    )
                })
            }
        </div>
    )

}



export default function ProductReviewRating({ rating = 2.2 }: { rating?: number }) {

    const calculateStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const remainder = rating - fullStars;
        let stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(1);
        }

        stars.push(parseFloat(remainder.toFixed(1)))

        while (stars.length < 5) {
            stars.push(0);
        }

        return stars;
    }

    const [stars, setStars] = useState(calculateStars(rating))




    return (
        <Star stars={stars} />
    )
}