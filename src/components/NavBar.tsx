"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-slate-600 p-6 flex justify-between items-center">
      <ul className="flex gap-12 items-end text-slate-100 text-sm">
        <li>
          <a href="#">
            <h1 className="text-2xl font-bold text-slate-100">WeAr</h1>
          </a>
        </li>
        <li>
          <Link className={"text-slate-100"} href="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className={"text-slate-100"} href="/roupa">
            Roupa
          </Link>
        </li>
      </ul>

      <div className="h-12 w-12 rounded-full overflow-hidden">
        <img src="https://i.pravatar.cc/50" alt="avatar do usuário" />
      </div>
    </nav>
  );
}
