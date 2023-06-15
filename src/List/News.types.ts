export type NewsProps = {
    results: any[],
    pages: number,
    currentPage: number,
    handleNext: () => void,
    handlePrev: () => void,
    tagClick: (keyword:string) => void 
};

