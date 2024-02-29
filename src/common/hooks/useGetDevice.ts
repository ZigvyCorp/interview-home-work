import React from "react";
import { DeviceMinSize } from "@/common/enum/device.enum";

export type TDevice = "mobile" | "tablet" | "desktop" | "smallMobile";
export const useGetDevice = () => {
  const getDevice = (size: number): TDevice => {
    if (size >= DeviceMinSize.DESKTOP) {
      return "desktop";
    }
    if (size >= DeviceMinSize.TABLET) {
      return "tablet";
    }
    return "mobile";
  };
  const [isMobile, setIsMobile] = React.useState<TDevice>("desktop");
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(getDevice(window.innerWidth));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);
  return isMobile;
};
