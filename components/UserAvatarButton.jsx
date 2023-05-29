import Image from "next/image";

const UserAvatarButton = () => {
  return (
    <button className="flex items-center justify-between p-1.5 rounded-full border border-gray-300 hover:bg-gray-100 w-24">
      <div className="ml-2">
        <Image
          src="/assets/icons/menu-icon.svg"
          alt="Menu Icon"
          width={20}
          height={20}
          className="text-gray-500"
        />
      </div>
      <div className="relative flex-shrink-0 w-9 h-9 rounded-full overflow-hidden">
        <Image
          src="/assets/images/user-avatar.png"
          alt="User Avatar"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </button>
  );
};

export default UserAvatarButton;