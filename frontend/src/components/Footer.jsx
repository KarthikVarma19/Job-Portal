import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className="px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-2 border-t border-gray-300 shadow-sm">
      <img src={assets.logo} alt="" />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @KarthikVarma.dev | All right reserved.
      </p>
      <div className="flex gap-2.5">
        <img src={assets.facebook_icon} alt="" width={38} />
        <img src={assets.twitter_icon} alt="" width={38} />
        <img src={assets.instagram_icon} alt="" width={38} />
      </div>
    </div>
  );
};

export default Footer;
