interface props {
    width? : string
    fill? : string
}


export function ArrowRigth({width = '21', fill = '#BBB'}: props) {
    return (
        <svg className="h-full" width={width} viewBox="0 0 21 37" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.33 1.776L18.517-.04.54 18.397l17.977 18.434 1.815-1.815L4.45 18.67v-.552z" fill={fill} fillRule="evenodd">
            </path>
        </svg>
    )
}

export function ArrowLeft({width = '21', fill = '#BBB'}: props) {
    return (
        <svg className="h-full" width={width} viewBox="0 0 21 37" xmlns="http://www.w3.org/2000/svg">
            <path d="M.539 1.776L2.353-.04l17.978 18.436L2.353 36.831.54 35.016l15.88-16.346v-.552z" fill={fill} fillRule="evenodd">
            </path>
        </svg>
    )
}