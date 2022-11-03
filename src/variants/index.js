export const cardDescriptionVariants = {
  hidden: {
    opacity: 0,
    y: "-100px",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      type: "spring",
    },
  },
};
export const sectionFourVariants = {
  hidden: {
    opacity: 0,
    x: "-100px",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      type: "spring",
    },
  },
};

export const videoVariants = {
  hidden: {
    x: "100px",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 8,
    },
  },
};

export const galleryVariants = {
  hidden: {
    y: "100px",
    opacity: 0,
  },
  visible: (custom) => {
    console.log(custom);
    return {
      y: 0,
      opacity: 1,
      transition: {
        delay: custom - 0.8,
      },
    };
  },
};

export const buttonVariants = {
  hover: {
    color: "#fff",
    borderRadius: "8px",
    backgroundColor: "#383838",
  },
};
