const color = {
	//공통 컬러
};

// 반응형 모듈
const size = {
    mobileS: "",
    mobileL: "",
	laptopS: "",
	tabletS: "",
	laptopXs: "",
	tablet: "",
	laptop: "",
	desktop: "",
	desktopL: "",
};

export const theme = {
	color,
	mobileS: `(max-width: ${size.mobileS})`,
	laptopXs: `(max-width: ${size.laptopXs})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	laptopS: `(max-width: ${size.laptopS})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`,
};