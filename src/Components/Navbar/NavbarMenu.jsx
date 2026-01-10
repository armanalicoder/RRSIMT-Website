"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { CiLogin } from "react-icons/ci";
const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Department", href: "/departments" },
  { name: "Admission", href: "/admission" },
  { name: "Placement", href: "/placements" },
  { name: "Activities", href: "/activities" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact Us", href: "/contact" },
];

const underline =
  "relative after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full";

export default function NavbarMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          setUser(data.user);
        }
        setLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout", { method: "POST" });
    const data = await res.json();
    if (data.success) {
      toast.error(data.message);
      setUser(null);
      router.push("/");
    }
  };

  if (loading) return null;

  return (
    <nav className="bg-red-800">
      <div className="flex h-16 items-center justify-between px-4 md:px-5">
        {/* Title */}
        <h1 className="text-2xl text-white uppercase">
          Welcome <span className="text-yellow-400 font-bold">Students</span>
        </h1>
        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden text-white p-2"
        >
          {open ? <MdClose /> : <CiMenuBurger />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden xl:flex text-white space-x-5 items-center">
          {links.slice(0, 7).map((link) => (
            <Link key={link.name} href={link.href} className={underline}>
              {link.name}
            </Link>
          ))}

          <Link href="/contact" className={underline}>
            Contact Us
          </Link>
          {user && (
            <Link href={`${user?.role}/dashboard`} className={underline}>
              Dashboard
            </Link>
          )}
          {/* Login Dropdown */}
          {!user ? (
            <div className="z-20 relative group">
              <span
                className={`${underline} cursor-pointer text-white bg-black px-2 py-1 rounded-md`}
              >
                Login <CiLogin className="inline mb-1" />
              </span>
              <div className="absolute top-3 -left-30 mt-3 w-44 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <Link
                  href="/login/director"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Director Login
                </Link>
                <Link
                  href="/login/faculty"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Faculty Login
                </Link>
              </div>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className={`${underline} cursor-pointer text-white bg-red-500 px-2 py-1 rounded-md`}
            >
              Logout <CiLogin className="inline mb-1" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 text-white"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {user && (
            <div className="my-1">
            <Link href={`${user?.role}/dashboard`} className={`${underline} text-white`}>
              Dashboard
            </Link>
            </div>
          )}
          {/* Login Dropdown */}
          {!user ? (
            <div className="z-20 relative group">
              <span
                className={`${underline} cursor-pointer text-white bg-black px-2 py-1 rounded-md`}
              >
                Login <CiLogin className="inline mb-1" />
              </span>
              <div className="absolute top-3 -left-30 mt-3 w-44 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <Link
                  href="/login/director"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Director Login
                </Link>
                <Link
                  href="/login/faculty"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Faculty Login
                </Link>
              </div>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className={`${underline} cursor-pointer text-white bg-red-500 px-2 py-1 rounded-md`}
            >
              Logout <CiLogin className="inline mb-1" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
