export const LANG_CHANGE = "LANG_CHANGE";

export const langChange = (d) => {
    return {
        type: LANG_CHANGE,
        payload: d
    }
}