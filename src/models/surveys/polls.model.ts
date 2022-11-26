export interface IQuestion {
    title: string,
    text: string,
    variants: string[]
    trueAnswer: {
        title: string
        text: string
        value: string
    }
    falseAnswer: {
        title: string
        text: string
    }
}

