"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Menu as MenuIcon,
  X,
  ChevronDown,
  ChevronRight,
  BookText,
  Layers,
  ShieldCheck,
  FileText,
} from "lucide-react";

type MenuKey = "services" | "resources" | "company" | null;

type NavItem = { label: string; href: string };
type IconNavItem = {
  label: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const SERVICES_COL_1: NavItem[] = [
  { label: "Trademark Registration", href: "/services/trademark-registration" },
  { label: "Free Trademark Search", href: "/services/free-trademark-search" },
  { label: "Comprehensive Trademark Search", href: "/services/comprehensive-trademark-search" },
  { label: "Trademark Consultancy", href: "/services/trademark-consultancy" },
];

const SERVICES_COL_2: NavItem[] = [
  { label: "Trademark Renewals", href: "/services/trademark-renewals" },
  { label: "Trademark Revival", href: "/services/trademark-revival" },
  { label: "Trademark Office Action", href: "/services/trademark-office-action" },
  { label: "Trademark Statement of Use", href: "/services/trademark-statement-of-use" },
  { label: "Trademark Extension of Use", href: "/services/trademark-extension-of-use" },
];

const SERVICES_COL_3: NavItem[] = [
  { label: "Trademark Monitoring", href: "/services/trademark-monitoring" },
  { label: "Cease and Desist", href: "/services/cease-and-desist" },
  { label: "Trademark Ownership Transfer", href: "/services/trademark-ownership-transfer" },
  { label: "Trademark Litigations", href: "/services/trademark-litigations" },
];

const RESOURCES: IconNavItem[] = [
  { label: "About Us", href: "/resources/about", Icon: Layers },
  { label: "Blogs", href: "/resources/blog", Icon: BookText },
  { label: "Trademark Categories", href: "/resources/trademark-categories", Icon: Layers },
];

const COMPANY: IconNavItem[] = [
  { label: "Privacy Policy", href: "/company/privacy-policy", Icon: ShieldCheck },
  { label: "Terms and Conditions", href: "/company/terms-and-conditions", Icon: FileText },
];

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHideTimer = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleOpen = (key: Exclude<MenuKey, null>) => {
    clearHideTimer();
    setOpenMenu(key);
  };

  const closeMenuImmediate = () => {
    clearHideTimer();
    setOpenMenu(null);
  };

  const toggleMenu = (key: Exclude<MenuKey, null>) => {
    if (openMenu === key) {
      closeMenuImmediate();
    } else {
      handleOpen(key);
    }
  };

  const delayedClose = () => {
    clearHideTimer();
    hideTimer.current = setTimeout(() => {
      setOpenMenu(null);
      hideTimer.current = null;
    }, 150);
  };

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b border-gray-200 bg-white transition-all font-[var(--font-body)]",
        scrolled ? "shadow-sm" : ""
      )}
    >
      <nav className="mx-auto flex h-26 max-w-[1200px] items-center justify-between px-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2" aria-label="Homepage">
          <Image
            src="/logo.png"
            alt="Brand logo"
            width={140}
            height={120}
            // className="h-16 w-auto sm:h-20"
            priority
          />
        </Link>

        {/* Desktop menu (>=1200px) */}
        <div className="hidden min-[1200px]:flex items-center gap-2">
          <Link
            href="/"
            className="px-3 py-2 text-sm text-[#333] hover:text-black transition font-[var(--font-heading)]"
          >
            Home
          </Link>

          <TopLink
            label="Services"
            open={openMenu === "services"}
            onOpen={() => handleOpen("services")}
            onClose={delayedClose}
            onToggle={() => toggleMenu("services")}
          >
            <MegaMenu />
          </TopLink>

          <Dropdown
            label="Resources"
            open={openMenu === "resources"}
            onOpen={() => handleOpen("resources")}
            onClose={delayedClose}
            onToggle={() => toggleMenu("resources")}
            items={RESOURCES}
          />

          <Dropdown
            label="Company"
            open={openMenu === "company"}
            onOpen={() => handleOpen("company")}
            onClose={delayedClose}
            onToggle={() => toggleMenu("company")}
            items={COMPANY}
          />

          <Link
            href="/contact"
            className="px-3 py-2 text-sm text-[#333] hover:text-black transition font-[var(--font-heading)]"
          >
            Contact Us
          </Link>

          <Link
            href="/trademark-registration-form"
            className="ml-2 rounded-full bg-[#6c4cb1] px-4 py-2 text-sm text-white shadow-sm transition hover:opacity-90 font-[var(--font-heading)]"
          >
            Apply for Registration
          </Link>
        </div>

        {/* Hamburger (<1200px) */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="min-[1200px]:hidden rounded-md p-2 text-[#333] hover:text-black transition"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {/* Overlay for drawer */}
      <div
        id="mobile-menu"
        className={cx(
          "fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity min-[1200px]:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
      />

      {/* Slide-in Drawer */}
      <aside
        className={cx(
          "fixed inset-y-0 right-0 z-50 w-[90%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out overflow-y-auto min-[1200px]:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between h-20 px-4 border-b border-gray-200">
          <Image
            src="/logo.png"
            alt="Brand logo"
            width={120}
            height={100}
            className="h-14 w-auto"
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-[#333] hover:text-black transition"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block rounded-md px-3 py-2 text-[#333] hover:text-black hover:bg-gray-50 transition font-[var(--font-heading)]"
          >
            Home
          </Link>

          <Accordion title="Services">
            <MobileSection title="Register your trademark" items={SERVICES_COL_1} onClose={() => setMobileOpen(false)} />
            <MobileSection title="Post filing services" items={SERVICES_COL_2} onClose={() => setMobileOpen(false)} />
            <MobileSection title="Trademark protection" items={SERVICES_COL_3} onClose={() => setMobileOpen(false)} />
          </Accordion>

          <Accordion title="Resources">
            <MobileList items={RESOURCES} onClose={() => setMobileOpen(false)} />
          </Accordion>

          <Accordion title="Company">
            <MobileList items={COMPANY} onClose={() => setMobileOpen(false)} />
          </Accordion>

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block rounded-md px-3 py-2 text-[#333] hover:text-black hover:bg-gray-50 transition font-[var(--font-heading)]"
          >
            Contact Us
          </Link>

          <Link
            href="/trademark-registration-form"
            onClick={() => setMobileOpen(false)}
            className="block text-center rounded-full bg-[#6c4cb1] px-4 py-2 text-white shadow-sm transition hover:opacity-90 font-[var(--font-heading)]"
          >
            Apply for Registration
          </Link>
        </div>
      </aside>
    </header>
  );
}

/* ---------- Desktop Subcomponents ---------- */

function TopLink({
  label,
  open,
  onOpen,
  onClose,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        onClick={onToggle}
        className="inline-flex items-center gap-1 px-3 py-2 text-sm text-[#333] hover:text-black transition-colors font-[var(--font-heading)]"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={cx("h-4 w-4 transition-transform", open ? "rotate-180" : "")} />
      </button>
      <div
        className={cx(
          "absolute left-1/2 -translate-x-1/2 z-40 w-[820px] rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-150",
          open ? "opacity-100 visible translate-y-2" : "opacity-0 invisible translate-y-0"
        )}
      >
        {children}
      </div>
    </div>
  );
}

function MegaMenu() {
  return (
    <div className="overflow-hidden rounded-xl bg-white">
        <div className="flex flex-col items-center justify-center gap-4 border-b border-[#e5e1f7] bg-[#f4f1ff] px-6 sm:flex-row sm:gap-6">
          <Image src="/logo.png" alt="Legal Mark Experts" width={100} height={100} />
          <div className="flex items-center gap-3 text-[#2f2474]">
            <span className="text-[18px] font-semibold text-[#6c4cb1]">
              Protect your brand with
            </span>
            <span className="text-[18px] font-semibold text-[#2f2474]">
              Legal Mark Experts
            </span>
          </div>
        </div>
      <div className="grid grid-cols-1 gap-6 px-6 py-6 sm:grid-cols-3">
        <MenuColumn title="Register your trademark" items={SERVICES_COL_1} />
        <MenuColumn title="Post filing services" items={SERVICES_COL_2} />
        <MenuColumn title="Trademark protection" items={SERVICES_COL_3} />
      </div>
    </div>
  );
}

function Dropdown({
  label,
  open,
  onOpen,
  onClose,
  onToggle,
  items,
}: {
  label: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  items: IconNavItem[];
}) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        onClick={onToggle}
        className="inline-flex items-center gap-1 px-3 py-2 text-sm text-[#333] hover:text-black transition-colors font-[var(--font-heading)]"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={cx("h-4 w-4 transition-transform", open ? "rotate-180" : "")} />
      </button>
      <div
        className={cx(
          "absolute left-0 z-40 w-64 rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-150",
          open ? "opacity-100 visible translate-y-2" : "opacity-0 invisible translate-y-0"
        )}
      >
        <ul className="p-2 space-y-1">
          {items.map(({ href, label: text, Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm text-[#333] hover:text-black hover:bg-gray-50 transition"
              >
                <Icon className="h-4 w-4 opacity-70" />
                <span>{text}</span>
                <ChevronRight className="ml-auto h-4 w-4 opacity-0 transition group-hover:opacity-100 group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MenuColumn({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div>
      <h3 className="mb-4 text-xs uppercase tracking-wide text-[#6c4cb1] font-semibold">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#2f2f2f] transition hover:bg-[#f4f1ff] hover:text-[#6c4cb1]"
            >
              <span>{i.label}</span>
              <ChevronRight className="h-4 w-4 text-[#b5aadf] transition group-hover:translate-x-1 group-hover:text-[#6c4cb1]" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Mobile Components ---------- */

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-3 px-3 text-[#333] hover:text-black transition-colors font-[var(--font-heading)]"
        aria-expanded={open}
      >
        <span className="font-semibold">{title}</span>
        <ChevronDown className={cx("h-5 w-5 transition-transform", open ? "rotate-180" : "")} />
      </button>
      <div
        className={cx(
          "grid overflow-hidden transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0 px-3 pb-3">{children}</div>
      </div>
    </div>
  );
}

function MobileSection({
  title,
  items,
  onClose,
}: {
  title: string;
  items: NavItem[];
  onClose: () => void;
}) {
  return (
    <div className="py-2">
      <div className="mb-2 text-xs uppercase tracking-wide text-[#212121] font-[var(--font-heading)]">{title}</div>
      {items.map((i) => (
        <Link
          key={i.href}
          href={i.href}
          onClick={onClose}
          className="block rounded-md px-3 py-2 text-[#333] hover:text-black hover:bg-gray-50 transition"
        >
          {i.label}
        </Link>
      ))}
    </div>
  );
}

function MobileList({
  items,
  onClose,
}: {
  items: IconNavItem[];
  onClose: () => void;
}) {
  return (
    <div className="space-y-1">
      {items.map(({ href, label, Icon }) => (
        <Link
          key={href}
          href={href}
          onClick={onClose}
          className="group flex items-center gap-2 rounded-md px-3 py-2 text-[#333] hover:text-black hover:bg-gray-50 transition"
        >
          <Icon className="h-4 w-4 opacity-70" />
          {label}
          <ChevronRight className="ml-auto h-4 w-4 opacity-0 transition group-hover:opacity-100 group-hover:translate-x-0.5" />
        </Link>
      ))}
    </div>
  );
}
