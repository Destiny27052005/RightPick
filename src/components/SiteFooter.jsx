function Footer() {
    return (
        <footer className="w-full bg-[#FAFAFA] px-6 md:px-12 py-8 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Top Divider Line */}
                <hr className="w-full border-t border-gray-200 mb-6" />

                {/* Copyright Text */}
                <p className="text-gray-500 text-xs md:text-sm tracking-wide text-center">
                    Copyright © {new Date().getFullYear()} Right Pick. All rights reserved.
                </p>

            </div>
        </footer>
    );
}

export default Footer;