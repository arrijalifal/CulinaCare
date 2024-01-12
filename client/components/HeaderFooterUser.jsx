export default function HeaderFooterUser({ children, userData }) {
    return <main className="w-screen h-screen flex flex-col">
        <section className="flex justify-between py-5 mx-2">
            <h1>Hello, {userData.user[0].username}</h1>
            <h2>(Koin){userData.user[0].coin}</h2>
        </section>
        <hr className="border-black mx-2 border-dashed" />
        <section className="mt-10 mx-2 flex-1 overflow-y-auto">
            {children}
        </section>
    </main>
}