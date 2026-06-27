'use client';
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initGA, trackPageView } from "../ga";

export default function GoogleAnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    const search = searchParams?.toString() ?? "";
    const url = pathname + (search ? `?${search}` : "");
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}
