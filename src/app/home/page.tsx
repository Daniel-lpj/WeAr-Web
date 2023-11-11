"use client"

import { useMyContext } from "@/Context/store";
import NavBar from "@/components/NavBar";
import Link from "next/link";

const Home = () => {
  const { token } = useMyContext();
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center h-screen">
        {!token ? (
          <div className="bg-gray-200 p-4 rounded-lg">
            <div className="bg-slate-300 p-6 flex justify-center items-center">
              <Link className="#000000 font-bold ml-1" href="/login">
                Entrar
              </Link>
            </div>
            <div className="bg-slate-300 p-6 flex items-center">
              <p>
                Não tem uma conta?
                <Link className="#000000 font-bold ml-1" href="/cadastro">
                  Cadastre-se
                </Link>
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-gray-200 p-4 rounded-lg">
            <div className="bg-slate-300 p-6 flex justify-center items-center">
              <Link className="#000000 font-bold ml-1" href="/login">
                WeAr
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
