export const stopPropagating = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    e.preventDefault()

    return
}