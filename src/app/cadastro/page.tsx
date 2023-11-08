"use client";

import { api } from "@/api/api";
import NavBar from "@/components/NavBar";
import { FormEvent, useState } from "react";

const Cadastro = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleCadastro = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      nome: nome,
      email: email,
      senha: senha,
    };

    try {
      const response = await api.post("/registrar", data);

      if (response.status === 201) {
        alert("Cadastro bem-sucedido!");
        window.location.href = "/login";
      } else {
        alert("Falha no cadastro. Verifique seus dados.");
      }
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error);
      alert("Erro ao fazer cadastro. Tente novamente mais tarde.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-200 p-4 rounded-lg">
          <div className="bg-slate-300 p-6 text-xl font-bold flex justify-between items-center">
            Cadastro
          </div>
          <div className="bg-slate-300 p-6 flex items-center">
            <form onSubmit={handleCadastro}>
              <div className="mb-4">
                <label
                  className="block text-slate-50 text-sm font-bold mb-2"
                  htmlFor="nome"
                >
                  Nome
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
                  type="nome"
                  id="nome"
                  name="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-slate-50 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-slate-50 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Senha:
                </label>

                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  id="password"
                  name="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-end">
                <button
                  className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 justify-end"
                  type="submit"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
