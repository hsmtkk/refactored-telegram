import { Button, Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

const Blog = () => {
  return (
    <div>
      <h1>コンタクトページ</h1>
      <p>お気軽にご連絡ください</p>
      <Input label="名前" />
      <Input label="メールアドレス" />
      <Textarea label="要件" />
      <Button>送信</Button>
    </div>
  )
}

export default Blog