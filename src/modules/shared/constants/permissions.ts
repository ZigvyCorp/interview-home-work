export const LIMIT = 10;
// export const SUPER_ADMIN = "super_admin";
export const SUPER_ADMIN = "user_management_access";
export const STORE_OWNER = "store_owner";
export const STAFF = "staff";
export const TOKEN = "token";
export const KEY_PERMISSIONS = "permissions";
export const AUTH_CRED = "AUTH_CRED";
export const AUTH_PERMISSION = "AUTH_PERMISSION";
export const USER_NAME = "USER_NAME";

export const PERMISSIONS = {
  SYSTEM_DATA_MANAGEMENT: {
    MENU: "system_data_management",
  },
  MENU_PRODUCT: {
    MENU: "product_management_access",
    PRODUCT: {
      LIST: "product_access",
      DETAIL: "product_show",
      CREATE: "product_create",
      UPDATE: "product_edit",
      DELETE: "product_delete",
    },
    PRODUCT_CATEGORY: {
      LIST: "product_category_access",
      DETAIL: "product_category_show",
      CREATE: "product_category_create",
      UPDATE: "product_category_edit",
      DELETE: "product_category_delete",
    },
    PRODUCT_STATUS: {
      LIST: "product_status_access",
      DETAIL: "product_status_show",
      CREATE: "product_status_create",
      UPDATE: "product_status_edit",
      DELETE: "product_status_delete",
    },
    PRODUCT_UNIT: {
      LIST: "product_unit_access",
      DETAIL: "product_unit_show",
      CREATE: "product_unit_create",
      UPDATE: "product_unit_edit",
      DELETE: "product_unit_delete",
    },
    PRODUCT_EXTRA: {
      LIST: "product_extra_access",
      DETAIL: "product_extra_show",
      CREATE: "product_extra_create",
      UPDATE: "product_extra_edit",
      DELETE: "product_extra_delete",
    },
    HASH_TAG: {
      LIST: "hash_tag_access",
      DETAIL: "hash_tag_show",
      CREATE: "hash_tag_create",
      UPDATE: "hash_tag_edit",
      DELETE: "hash_tag_delete",
    },
    PRODUCT_VAT_EXPORTING_FEE: {
      LIST: "product_vat_exporting_fee_access",
      DETAIL: "product_vat_exporting_fee_show",
      CREATE: "product_vat_exporting_fee_create",
      UPDATE: "product_vat_exporting_fee_edit",
      DELETE: "product_vat_exporting_fee_delete",
    },
  },
  MENU_MARKETING: {
    MENU: "marketing_management_access",

    // CAMPAIGN: {
    //     LIST:   "campaign_access",
    //     DETAIL: "campaign_show",
    //     CREATE: "campaign_create",
    //     UPDATE: "campaign_edit",
    //     DELETE: "campaign_delete",
    // },
    CAMPAIGN: {
      LIST: "voucher_access",
      DETAIL: "voucher_show",
      CREATE: "voucher_create",
      UPDATE: "voucher_edit",
      DELETE: "voucher_delete",
    },

    ISSUED_VOUCHER: {
      LIST: "voucher_issue_access",
      DETAIL: "voucher_issue_show",
      CREATE: "voucher_issue_create",
      UPDATE: "voucher_issue_edit",
      DELETE: "voucher_issue_delete",
    },
  },
  MENU_USER: {
    MENU: "user_management_access",
    USER: {
      LIST: "user_access",
      DETAIL: "user_show",
      CREATE: "user_create",
      UPDATE: "user_edit",
      DELETE: "user_delete",
    },
    PERMISSION: {
      LIST: "permission_access",
      DETAIL: "permission_show",
      CREATE: "permission_create",
      UPDATE: "permission_edit",
      DELETE: "permission_delete",
    },
    ROLE: {
      LIST: "role_access",
      DETAIL: "role_show",
      CREATE: "role_create",
      UPDATE: "role_edit",
      DELETE: "role_delete",
    },
    DEPARTMENT: {
      LIST: "department_access",
      DETAIL: "department_show",
      CREATE: "department_create",
      UPDATE: "department_edit",
      DELETE: "department_delete",
    },
    SHIFT: {
      LIST: "shift_access",
      DETAIL: "shift_show",
      CREATE: "shift_create",
      UPDATE: "shift_edit",
      DELETE: "shift_delete",
    },
    WEEKLY_SCHEDULE: {
      LIST: "weekly_schedule_access",
      DETAIL: "weekly_schedule_show",
      CREATE: "weekly_schedule_create",
      UPDATE: "weekly_schedule_edit",
      DELETE: "weekly_schedule_delete",
    },
    USER_SHIFT: {
      LIST: "user_shift_access",
      DETAIL: "user_shift_show",
      CREATE: "user_shift_create",
      UPDATE: "user_shift_edit",
      DELETE: "user_shift_delete",
    },
  },

  MENU_RESTAURANT: {
    MENU: "restaurant_management_access",

    RESTAURANT: {
      LIST: "restaurant_access",
      DETAIL: "restaurant_show",
      CREATE: "restaurant_create",
      UPDATE: "restaurant_edit",
      DELETE: "restaurant_delete",
    },
    RESTAURANT_STATUS: {
      LIST: "restaurant_status_access",
      DETAIL: "restaurant_status_show",
      CREATE: "restaurant_status_create",
      UPDATE: "restaurant_status_edit",
      DELETE: "restaurant_status_delete",
    },
    RESTAURANT_SHIPPING_FEE: {
      LIST: "restaurant_shipping_fee_access",
      DETAIL: "restaurant_shipping_fee_show",
      CREATE: "restaurant_shipping_fee_create",
      UPDATE: "restaurant_shipping_fee_edit",
      DELETE: "restaurant_shipping_fee_delete",
    },
    OPERATING_TIME: {
      LIST: "operating_time_access",
      DETAIL: "operating_time_show",
      CREATE: "operating_time_create",
      UPDATE: "operating_time_edit",
      DELETE: "operating_time_delete",
    },
    TABLE_UTILITY: {
      LIST: "table_utility_access",
      DETAIL: "table_utility_show",
      CREATE: "table_utility_create",
      UPDATE: "table_utility_edit",
      DELETE: "table_utility_delete",
    },
    TABLE_AREA: {
      LIST: "table_area_access",
      DETAIL: "table_area_show",
      CREATE: "table_area_create",
      UPDATE: "table_area_edit",
      DELETE: "table_area_delete",
    },
    TABLE: {
      LIST: "table_access",
      DETAIL: "table_show",
      CREATE: "table_create",
      UPDATE: "table_edit",
      DELETE: "table_delete",
    },
  },

  MENU_SETTINGS: {
    MENU: "setting_access",

    PROVINCE: {
      LIST: "province_access",
      DETAIL: "province_show",
      CREATE: "province_create",
      UPDATE: "province_edit",
      DELETE: "province_delete",
    },
    DISTRICT: {
      LIST: "district_access",
      DETAIL: "district_show",
      CREATE: "district_create",
      UPDATE: "district_edit",
      DELETE: "district_delete",
    },
  },

  MENU_ORDER: {
    MENU: "order_management_access",

    ORDER: {
      LIST: "order_access",
      DETAIL: "order_show",
      CREATE: "order_create",
      UPDATE: "order_edit",
      DELETE: "order_delete",
    },
    ORDER_DETAILS: {
      LIST: "order_detail_access",
      DETAIL: "order_detail_show",
      CREATE: "order_detail_create",
      UPDATE: "order_detail_edit",
      DELETE: "order_detail_delete",
    },
    ORDER_STATUS: {
      LIST: "order_status_access",
      DETAIL: "order_status_show",
      CREATE: "order_status_create",
      UPDATE: "order_status_edit",
      DELETE: "order_status_delete",
    },
  },

  MENU_CART: {
    MENU: "cart_management_access",

    CART: {
      LIST: "cart_access",
      DETAIL: "cart_show",
      CREATE: "cart_create",
      UPDATE: "cart_edit",
      DELETE: "cart_delete",
    },

    CART_DETAILS: {
      LIST: "cart_detail_access",
      DETAIL: "cart_detail_show",
      CREATE: "cart_detail_create",
      UPDATE: "cart_detail_edit",
      DELETE: "cart_detail_delete",
    },
  },

  MENU_RESERVATION: {
    MENU: "reservation_management_access",

    RESERVATION: {
      LIST: "reservation_access",
      DETAIL: "reservation_show",
      CREATE: "reservation_create",
      UPDATE: "reservation_edit",
      DELETE: "reservation_delete",
    },
    RESERVATION_STATUS: {
      LIST: "reservation_status_access",
      DETAIL: "reservation_status_show",
      CREATE: "reservation_status_create",
      UPDATE: "reservation_status_edit",
      DELETE: "reservation_status_delete",
    },
  },

  MENU_CUSTOMER: {
    MENU: "customer_management_access",

    CUSTOMER: {
      LIST: "customer_access",
      DETAIL: "customer_show",
      CREATE: "customer_create",
      UPDATE: "customer_edit",
      DELETE: "customer_delete",
    },
    POINT: {
      LIST: "point_access",
      DETAIL: "point_show",
      CREATE: "point_create",
      UPDATE: "point_edit",
      DELETE: "point_delete",
    },
    MEMBERSHIP: {
      LIST: "membership_access",
      DETAIL: "membership_show",
      CREATE: "membership_create",
      UPDATE: "membership_edit",
      DELETE: "membership_delete",
    },
    ADDRESS: {
      LIST: "address_access",
      DETAIL: "address_show",
      CREATE: "address_create",
      UPDATE: "address_edit",
      DELETE: "address_delete",
    },
  },

  MENU_COUPON: {
    MENU: "coupon_management_access",

    COUPON: {
      LIST: "coupon_access",
      DETAIL: "coupon_show",
      CREATE: "coupon_create",
      UPDATE: "coupon_edit",
      DELETE: "coupon_delete",
    },
    COUPON_TYPE: {
      LIST: "coupon_type_access",
      DETAIL: "coupon_type_show",
      CREATE: "coupon_type_create",
      UPDATE: "coupon_type_edit",
      DELETE: "coupon_type_delete",
    },
    COUPON_STATUS: {
      LIST: "coupon_type_access",
      DETAIL: "coupon_type_show",
      CREATE: "coupon_type_create",
      UPDATE: "coupon_type_edit",
      DELETE: "coupon_type_delete",
    },
    DISCOUNT_TYPE: {
      LIST: "coupon_status_access",
      DETAIL: "coupon_status_show",
      CREATE: "coupon_status_create",
      UPDATE: "coupon_status_edit",
      DELETE: "coupon_status_delete",
    },
    COUPON_CUSTOMER_STATUS: {
      LIST: "coupon_customer_status_access",
      DETAIL: "coupon_customer_status_show",
      CREATE: "coupon_customer_status_create",
      UPDATE: "coupon_customer_status_edit",
      DELETE: "coupon_customer_status_delete",
    },
    COUPON_CUSTOMER: {
      LIST: "coupon_customer_access",
      DETAIL: "coupon_customer_show",
      CREATE: "coupon_customer_create",
      UPDATE: "coupon_customer_edit",
      DELETE: "coupon_customer_delete",
    },
  },

  MENU_BANNER: {
    MENU: "banner_access",

    BANNER: {
      LIST: "banner_access",
      DETAIL: "banner_show",
      CREATE: "banner_create",
      UPDATE: "banner_edit",
      DELETE: "banner_delete",
    },
  },

  MENU_CHANGE_PROFILE_PASSWORD: {
    MENU: "profile_password_edit",
  },

  MENU_RATING: {
    MENU: "rating_access",

    RATING: {
      LIST: "rating_access",
      DETAIL: "rating_show",
      CREATE: "rating_create",
      UPDATE: "rating_edit",
      DELETE: "rating_delete",
    },
  },

  MENU_NOTIFICATION: {
    MENU: "notification_access",

    NOTIFICATION: {
      LIST: "notification_access",
      DETAIL: "notification_show",
      CREATE: "notification_create",
      UPDATE: "notification_edit",
      DELETE: "notification_delete",
    },
  },

  MENU_HASHTAG: {
    MENU: "hash_tag_access",

    HASHTAG: {
      LIST: "hash_tag_access",
      DETAIL: "hash_tag_show",
      CREATE: "hash_tag_create",
      UPDATE: "hash_tag_edit",
      DELETE: "hash_tag_delete",
    },
  },

  MENU_CAR_BOOKING: {
    MENU: "car_booking_management_access",

    CAR_BOOKING: {
      LIST: "car_booking_access",
      DETAIL: "car_booking_show",
      CREATE: "car_booking_create",
      UPDATE: "car_booking_edit",
      DELETE: "car_booking_delete",
    },
    CAR_BOOKING_STATUS: {
      LIST: "car_booking_status_access",
      DETAIL: "car_booking_status_show",
      CREATE: "car_booking_status_create",
      UPDATE: "car_booking_status_edit",
      DELETE: "car_booking_status_delete",
    },
  },

  PARTNER: {
    LIST: "partner_access",
    DETAIL: "partner_show",
    CREATE: "partner_create",
    UPDATE: "partner_edit",
    DELETE: "partner_delete",
  },

  MATERIAL_GROUP: {
    LIST: "partner_access",
    DETAIL: "partner_show",
    CREATE: "partner_create",
    UPDATE: "partner_edit",
    DELETE: "partner_delete",
  },

  // MATERIAL_GROUP: {
  //     LIST:   "material_group_access",
  //     DETAIL: "material_group_show",
  //     CREATE: "material_group_create",
  //     UPDATE: "material_group_edit",
  //     DELETE: "material_group_delete",
  // },
};

export const ORDER_TYPE = {
  TAKE_AWAY: 0,
  DELIVERY: 1,
  RESERVATION: 2,
  ONSITE_SERVICE: 3,
};

export const ORDER_TYPES = [
  { id: 0, name: "common:order-type-takeaway" },
  { id: 1, name: "common:order-type-delivery" },
  { id: 2, name: "common:order-type-reservation" },
  { id: 3, name: "common:order-type-onsite-service" },
];

export const ORDER_STATUS = {
  WAITING_FOR_CONFIRM: 1,
  CONFIRMED: 2,
  CUSTOMER_ARRIVED: 7,
  REQUEST_BILLING: 8,
  BILLING: 9,
  PAID: 10,
  COMPLETE: 5,
  CANCELED: 6,
};

export const ORDER_STATUSES = [
  { id: 0, name: "common:status-data-error", color: "bg-red-500" },
  { id: 1, name: "common:status-waiting-for-confirm", color: "bg-accent" },
  { id: 2, name: "common:status-confirmed", color: "bg-blue-600" },
  { id: 3, name: "common:status-package-ready", color: "bg-accent" },
  { id: 4, name: "common:status-delivering", color: "bg-accent" },
  { id: 5, name: "common:status-complete", color: "bg-green-500" },
  { id: 6, name: "common:status-canceled", color: "bg-gray-500" },
  { id: 7, name: "common:status-customer-arrived", color: "bg-blue-600" },
  { id: 8, name: "common:status-request-billing", color: "bg-accent" },
  { id: 9, name: "common:status-billing", color: "bg-accent" },
  { id: 10, name: "common:status-paid", color: "bg-green-500" },
];
