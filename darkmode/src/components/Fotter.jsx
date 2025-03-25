

const Fotter = ({ dark }) => {

    return (
        <div
          className={`w-full fixed bottom-0 left-0 h-[100px] flex flex-col items-center justify-center px-6 shadow-md transition-all duration-300 ${dark ? "bg-black text-white" : "bg-gray-200 text-black"}`}
        >
          <p className="text-lg font-semibold">© 2025 Crypto M5. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>
      );
};

export default Fotter;
