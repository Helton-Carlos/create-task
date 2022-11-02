import Input from "../components/Input"
import Button from "../components/Button"

export function Login() {
  return (
    <div>
      <h2 className="font-bold text-2xl mb-8">Login 🔐</h2>
      <form>
        <Input label="E-mail" type="email" name="e-mail" placeholder="Digite seu email" />
        <Input label="Password" type="password" name="password" placeholder="Digite seu password" />
        <Button text="See more" />
      </form>
    </div>
  )
}
