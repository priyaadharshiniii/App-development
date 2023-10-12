import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Tails`;
        } else {
            document.title = 'Tails | The Perfect Pet Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
