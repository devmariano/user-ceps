export const FormLoginComponent = () => {

    return (
        
        <form>
            <legend>Login</legend>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' placeholder="Digite se email" />
            </div>
            <div className="input-group">
                <label htmlFor="password">Senha</label>
                <input type="password" id='password' placeholder="Digite sua senha" />
            </div>
            <button type="submit">Logar</button>
        </form>
    )
}