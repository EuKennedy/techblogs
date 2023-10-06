const validarEmail = (email) =>{
  return  email?.toString().includes('@') && email?.toString().includes('.')
}

const validarSenha = (senha) =>{
    senha?.toString().lenght > 6
}

export {
    validarEmail,
    validarSenha,
}