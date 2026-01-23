export default function ProfilePage({params}:any) {
    return (
        <div className="bg-[#121212] h-screen flex items-center justify-center">
            <h1 className="text-center text-white text-2xl">Profile</h1>
            <p className="text-center text-white text-2xl">profile page {params.id}</p>
        </div>
    )
}