export default function SimpleTest() {
  return (
    <div className="min-h-screen bg-black text-green-500 p-8">
      <h1 className="text-4xl font-bold mb-4">🚀 YesLinux - Teste Simples</h1>
      <div className="space-y-4">
        <p>✅ Next.js funcionando</p>
        <p>✅ Tailwind CSS funcionando</p>
        <p>✅ TypeScript compilando</p>
        <div className="bg-gray-900 p-4 rounded border border-green-500">
          <code>$ whoami</code>
          <br />
          <span className="text-green-400">YesLinux Consultoria em Software Livre</span>
        </div>
      </div>
    </div>
  )
}