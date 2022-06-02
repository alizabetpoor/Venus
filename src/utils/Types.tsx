export type cardInfoProps = {
  userDetail: {
    [key: string]: any;
  };
};

export type cardDetailInfoProps = {
  userDetail: {
    [key: string]: any;
  };
  animatedHeight: any;
};

export type homeProps = {
  getUsers: (usersNumber: number) => void;
  loading: boolean;
  users: [];
  refetch: () => void;
  searchResults: any[];
};
export type LabelProps = {
  text?: string;
  textStyle?: any;
  icon?: any;
  iconStyle?: any;
  textWrapperStyle?: any;
  iconWrapperStyle?: any;
  labelStyle?: any;
  isIcon?: boolean;
  isText?: boolean;
};
