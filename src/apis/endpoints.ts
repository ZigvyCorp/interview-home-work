export const API_ENDPOINTS = {
  // NORI
  SIGNIN: "/api/v1/web/noriStaff/auth/signIn",
  SIGNIN_WITH_TOKEN: "/api/v1/web/noriStaff/auth/signInWithToken",
  GET_USER_PROFILE: "/api/v1/web/noriStaff/staff/getUserProfile",
  // Order
  ORDERS: "api/v1/admin/orders",
  ORDER_DETAIL: "api/v1/admin/orders/getOrderDetail",
  PROCESSING_ORDER_COUNTS: "api/v1/admin/orders/countOrderGroupByType",

  AVAILABLE_VOUCHERS: "api/v1/web/noriStaff/customers/getVoucherCanUseList",
  APPLY_VOUCHERS: "api/v1/web/noriStaff/customers/applyVoucher",
  REMOVE_VOUCHERS: "api/v1/web/noriStaff/customers/removeVoucher",
  CONFIRM_RETURNED_PRODUCTS: "api/v1/admin/orders/confirmReturnedProducts",
  REJECT_RETURNED_PRODUCTS: "api/v1/admin/orders/rejectReturnedProducts",
  COLLECT_MONEY: "api/v1/admin/orders/collectMoney",
  COLLECT_MONEY_FOR_DEBT: "api/v1/admin/orders/collectMoneyForDebt",
  CREATE_DEBT: "api/v1/admin/orders/debtMoney",
  PAYMENTS: "api/v1/admin/orders/getPayments",
  UPDATE_CUSTOMER_INFO: "/api/v1/admin/orders/updateCustomerInfo",
  // Product
  PRODUCTS: "api/v1/admin/products",
  PRODUCT_UNITS: "/api/v1/admin/product-units",
  CATEGORIES: "/api/v1/admin/categories",
  PRODUCT_CATEGORIES: "/api/v1/admin/product-categories",
  PRODUCT_EXTRAS: "/api/v1/admin/product-extras",
  HASH_TAGS: "/api/v1/admin/hash-tags",
  PAYMENT_METHODS: "/api/v1/admin/orders/getPaymentMethods",
  PRODUCT_VAT_EXPORTING_FEES: "/api/v1/admin/product-vat-export-fees",
  // Staff
  RESTAURANTS: "/api/v1/admin/restaurants",
  DEPARTMENTS: "/api/v1/admin/departments",
  SHIFTS: "/api/v1/admin/shifts",
  WEEKLY_SCHEDULES: "/api/v1/admin/staff-weekly-schedules",
  USER_SHIFTS: "/api/v1/admin/user-shifts",
  UPDATE_USER_SHIFT_BY_DATE: "/api/v1/admin/user-shifts/updateUserShiftByDate",
  USER_SHIFTS_BY_RESTAURANT: "/api/v1/admin/user-shifts/getUserShiftByRestaurant",
  USERS: "/api/v1/admin/users",
  ROLES: "/api/v1/admin/roles",
  PERMISSIONS: "/api/v1/admin/permissions",
  // Marketing
  BANNERS: "api/v1/admin/banners",
  CAMPAIGNS: "api/v1/admin/campaigns",
  VOUCHERS: "api/v1/admin/voucher-issues",
  CRITERIA: "api/v1/admin/criteria",
  ISSUANCE_CRITERIA: "api/v1/admin/issue-criteria",
  // Restaurant
  TABLE_UTILITIES: "/api/v1/admin/table-utilities",
  TABLE_AREAS: "/api/v1/admin/table-areas",
  TABLES: "/api/v1/admin/tables",
  // Receipts
  RECEIPTS: "api/v1/admin/orders/getReceiptDetail",
  CREATE_RECEIPTS: "api/v1/admin/receipts/createReceipts",
  // Partner
  PARTNERS: "/api/v1/admin/partner",
  // Templates
  ATTACHMENTS: "attachments",
  ANALYTICS: "analytics",
  ATTRIBUTES: "attributes",
  ATTRIBUTE_VALUES: "attribute-values",
  ORDER_STATUS: "order-status",
  REGISTER: "register",
  POPULAR_PRODUCTS: "popular-products",
  COUPONS: "coupons",

  // customer
  CUSTOMERS: "/api/v1/admin/customers",
  CUSTOMER_LIST: "/api/v1/admin/customers/getCustomerList",
  EXPORT_CUSTOMERS: "/api/v1/admin/exports/partnerCustomer",
  CUSTOMERS_PARTNERS: "/api/v1/admin/suggestions/getPartnerList",
  // system logs
  API_LOGS: "/api/v1/admin/logs",
  // Warehouse
  MATERIAL_GROUPS: "/api/v1/admin/product-units",
  // Old
  TAXES: "taxes",
  SHIPPINGS: "shippings",
  SETTINGS: "settings",
  TAGS: "tags",
  TYPES: "types",
  PROFILE_UPDATE: "profile-update",
  LOGOUT: "logout",
  ME: "me",
  TOKEN: "token",
  BLOCK_USER: "users/block-user",
  UNBLOCK_USER: "users/unblock-user",
  CHANGE_PASSWORD: "change-password",
  FORGET_PASSWORD: "forget-password",
  VERIFY_FORGET_PASSWORD_TOKEN: "verify-forget-password-token",
  RESET_PASSWORD: "reset-password",
  DOWNLOAD_INVOICE: "download/invoice",
  APPROVE_SHOP: "approve-shop",
  DISAPPROVE_SHOP: "disapprove-shop",
  SHOPS: "shops",
  MY_SHOPS: "my-shops",
  WITHDRAWS: "withdraws",
  APPROVE_WITHDRAW: "approve-withdraw",
  ADD_WALLET_POINTS: "add-points",
  STAFFS: "staffs",
  ADD_STAFF: "staffs",
  REMOVE_STAFF: "staffs",
  IMPORT_PRODUCTS: "import-products/",
  IMPORT_ATTRIBUTES: "import-attributes/",
  IMPORT_VARIATION_OPTIONS: "import-variation-options/",

  // reports ---

  DEPTS_REPORTS: "/api/v1/admin/reports/getReportDebtList",
  DEPTS_REPORTS_DETAIL: "/api/v1/admin/reports/getReportDebtDetail",
  EXPORT_DEBTS_LIST: "/api/v1/admin/exports/reportDebt",
  EXPORT_DEBTS_LIST_DETAIL: "/api/v1/admin/exports/reportDebtDetail",
  EXPORT_SALE_DATE_LIST_DETAIL: "/api/v1/admin/exports/reportReceiptDetail",
  EXPORT_SALE_PRODUCTS_LIST_DETAIL: "/api/v1/admin/exports/reportProductRevenueDetail",
  EXPORT_SALE_DATE_LIST: "/api/v1/admin/exports/reportReceipt",
  EXPORT_SALE_PRODUCT_LIST: "/api/v1/admin/exports/reportProductRevenue",
  EXPORT_RETURN_PRODUCTS_REPORTS_WHILEBILLINGS: "/api/v1/admin/exports/reportReturnProductWhileBilling",

  EXPORT_RETURN_PRODUCTS_REPORTS: "/api/v1/admin/exports/reportReturnProductList",

  EXPORT_CANCEL_PRODUCTS_REPORTS: "/api/v1/admin/exports/reportCancelProductList",

  EXPORT_RETURN_PRODUCTS_REPORTS_DETAIL: "/api/v1/admin/exports/reportReturnProductDetail",

  EXPORT_CANCEL_PRODUCTS_REPORTS_DETAIL: "/api/v1/admin/exports/reportCancelProductDetail",

  SALE_REPORTS: "/api/v1/admin/reports/getReportReceiptList",

  RETURN_PRODUCTS_REPORTS_WHILEBILLINGS: "/api/v1/admin/reports/getReportReturnProductWhileBilling",
  RETURN_PRODUCTS_REPORTS: "/api/v1/admin/reports/getReportReturnProductList",
  CANCEL_PRODUCTS_REPORTS: "/api/v1/admin/reports/getReportCancelProductList",

  RETURN_PRODUCTS_REPORTS_DETAIL: "/api/v1/admin/reports/getReportReturnProductDetail",
  CANCEL_PRODUCTS_REPORTS_DETAIL: "/api/v1/admin/reports/getReportCancelProductDetail",

  // Customer Debt
  CUSTOMER_TOTAL_DEBTS: "/api/v1/admin/receipts/getReceiptDebt",
  CUSTOMER_DEBTS: "/api/v1/admin/receipts/getReceiptDebtList",
  SALE_REPORTS_PRODUCTS: "/api/v1/admin/reports/getReportProductRevenueList",
  SALE_REPORTS_DETAIL: "/api/v1/admin/reports/getReportReceiptDetail",
  SALE_REPORTS_PRODUCTS_DETAIL: "/api/v1/admin/reports/getReportProductRevenueDetail",
};
