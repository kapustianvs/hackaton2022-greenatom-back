export interface IQuestion {
    title: string,
    text: string,
    variants: string[]
    true_answer: {
        title: string
        text: string
        value?: string
    }
    false_answer: {
        title: string
        text: string
    }
}

