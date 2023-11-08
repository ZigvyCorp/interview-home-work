import { SITE_URL } from "@/modules/shared";

export const SIDEBAR_ITEMS = [
  {
    label: "Quản lý nhà hàng",
    herf: "/test",
    icon: "ReportIcon",
  },
  {
    label: "Báo cáo",
    icon: "ReportIcon",
    children: [
      {
        label: "Báo cáo công nợ",
        herf: SITE_URL.REPORTS_DEBTS,
      },
      {
        label: "Báo cáo bán hàng",
        herf: SITE_URL.REPORTS_SALE,
      },
      {
        label: "Báo cáo hủy/trả",
        herf: SITE_URL.REPORT_RETURN_PRODUCTS,
      },
    ],
  },
];
