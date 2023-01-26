import { useMediaQuery } from "react-responsive";

export const smMobile = "(max-width: 24rem)"; //384px
export const mobile = "(max-width: 30rem)"; //480px
export const tablet = "(max-width: 48rem)"; //768px
export const desktop = "(max-width: 75rem)"; //1200px

export const useQuery = (): {
    isSmMobile: boolean,
    isMobile: boolean,
    isTablet: boolean,
    isDesktop: boolean
} => ({
    isSmMobile: useMediaQuery({ query: smMobile }),
    isMobile: useMediaQuery({ query: mobile }),
    isTablet: useMediaQuery({ query: tablet }),
    isDesktop: useMediaQuery({ query: desktop })
});