export  const ID = (firstIndex,lastIndex) => {
        return Math.random().toString(36).substr(firstIndex || 2, lastIndex || 9);
    };

export const ITEMS = Array(20).fill(0).map(item => {
    return {
        id: ID(),
        title:  ID(10, 14),
        description: ID(1, 35),
        price: Math.floor(Math.random() * 100)
    }
})
