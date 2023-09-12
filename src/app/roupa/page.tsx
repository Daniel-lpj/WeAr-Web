"use client";

import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";

interface IRoupa {
  id: number;
  tamanho: string;
  cor: string;
}

const Roupa = () => {
  const [roupa, setRoupa] = useState<IRoupa[] | undefined>(undefined);

  useEffect(() => {
    fetch(`http://localhost:8080/api/roupas`)
      .then((response) => response.json())
      .then((data) => setRoupa(data))
      .catch((error) =>
        console.error("Erro ao buscar lista de roupas:", error)
      );
  }, []);

  return (
    <>
      <NavBar active={"roupa"} />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-200 p-4 rounded-lg">
          <div className="bg-slate-300 p-6 text-xl font-bold flex justify-between items-center">
            Roupa
          </div>
          <div className="bg-slate-300 p-4 rounded flex shadow-md">
            {roupa ? (
              roupa?.map((item) => (
                <>
                  <div className="bg-slate-300 m-2 rounded flex flex-col p-4 shadow-md">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/zhudrauta38-2%3A10?alt=media&token=59e33f30-f34c-4d9a-941f-75fbee401a9a"
                      alt="Camisa"
                    />
                    <p className="text-lg mb-4">Tamanho: {item?.tamanho}</p>
                    <p className="text-lg">Cor: {item?.cor}</p>
                  </div>
                </>
              ))
            ) : (
              <p>Carregando lista de roupas...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Roupa;
