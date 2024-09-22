import { useSpring, animated } from 'react-spring';

export const useFadeIn = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    return props;
};
