import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="overflow-hidden bg-[#004733] px-6 md:px-10 lg:px-14 ">
        <h1 className="font-bold leading-heading tracking-tight md:tracking-tighter leading-small m-0 p-0 pt-2 text-center text-[50px] text-[#1EE07F] md:text-[80px] lg:text-[118px] md:relative top-16 md:top-[40px] lg:top-16 z-10">
          Mortgages
          <br />
          made simple
        </h1>
        <div className="relative flex flex-col items-center justify-center md:flex-row">
          <div className="w-80 md:w-auto">
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold leading-normal disabled:opacity-50 transition-all ease-in-out duration-200 bg-[#1EE07F] text-[#004733] hover:bg-[#004733] hover:text-white h-16 px-12 py-5 mt-lg w-full md:mt-none md:w-fit"
              href="/start"
            >
              Start my approval
            </a>
            <div className="mt-3 flex items-center justify-center gap-1 text-sm text-white">
              <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 6H8.5V10.5H7.5V6ZM6.5 1.5H9.5V2.5H6.5V1.5Z" fill="#1EE07F"></path>
                <path className="fill-[#1EE07F]" d="M13.9987 5.00055L13.2887 4.29555L12.1637 5.42055C11.2429 4.35706 9.94762 3.68926 8.54717 3.5559C7.14671 3.42254 5.74872 3.83386 4.64365 4.70442C3.53857 5.57497 2.81139 6.83782 2.61318 8.23057C2.41497 9.62333 2.76098 11.0389 3.57931 12.1832C4.39765 13.3275 5.62539 14.1125 7.00745 14.3751C8.3895 14.6377 9.81961 14.3578 11.0006 13.5934C12.1817 12.8291 13.0228 11.6391 13.3493 10.2707C13.6758 8.90233 13.4625 7.46077 12.7537 6.24554L13.9987 5.00055ZM7.99875 13.5005C7.10873 13.5005 6.2387 13.2366 5.49868 12.7422C4.75866 12.2477 4.18189 11.5449 3.84129 10.7226C3.5007 9.90035 3.41158 8.99555 3.58522 8.12264C3.75885 7.24972 4.18743 6.4479 4.81677 5.81856C5.44611 5.18923 6.24793 4.76064 7.12084 4.58701C7.99376 4.41338 8.89856 4.50249 9.72082 4.84309C10.5431 5.18368 11.2459 5.76046 11.7404 6.50048C12.2348 7.2405 12.4987 8.11053 12.4987 9.00055C12.4987 10.194 12.0246 11.3386 11.1807 12.1825C10.3368 13.0264 9.19222 13.5005 7.99875 13.5005Z"></path>
              </svg>
              <span className="mr-1">3 min</span>
              <span>| No credit impact</span>
            </div>
          </div>
          <div className="mt-5 md:mb-[-30px] md:mt-0 md:mt-[-100px] -z-0">
            <Image
              src="/images/phone-mockup.png"
              alt="Pre-approval amount"
              width={510}
              height={810}
              decoding="async"
              priority
              style={{ color: "transparent" }}
            />
          </div>
          <div className="bg-[#073126] rounded-lg absolute bottom-8 px-3 py-2.5 md:relative md:bg-transparent md:mt-lg">
            <div className="flex items-center gap-2">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_328_5133)">
                  <path
                    d="M23.9998 12.2755C23.9998 11.4598 23.9324 10.6397 23.7884 9.83716H12.2405V14.4581H18.8534C18.579 15.9485 17.6973 17.2669 16.4062 18.1047V21.103H20.3515C22.6683 19.013 23.9998 15.9264 23.9998 12.2755Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12.2394 24.0003C15.5414 24.0003 18.326 22.9377 20.3549 21.1034L16.4096 18.1051C15.3119 18.837 13.8949 19.2515 12.2439 19.2515C9.04991 19.2515 6.34175 17.1394 5.37006 14.2998H1.29883V17.3907C3.37718 21.4429 7.61036 24.0003 12.2394 24.0003Z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.36724 14.299C4.8544 12.8086 4.8544 11.1948 5.36724 9.70447V6.61353H1.30051C-0.435945 10.0043 -0.435945 13.9992 1.30051 17.3899L5.36724 14.299Z"
                    fill="#FBBC04"
                  ></path>
                  <path
                    d="M12.2394 4.74868C13.9849 4.72223 15.6718 5.36599 16.9359 6.54769L20.4314 3.12164C18.218 1.08453 15.2805 -0.0354426 12.2394 -0.000167897C7.61036 -0.000167897 3.37718 2.55725 1.29883 6.61383L5.36556 9.70477C6.33276 6.86075 9.04541 4.74868 12.2394 4.74868Z"
                    fill="#EA4335"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_328_5133">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="flex items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5686 9.12124C22.4778 8.84129 22.3066 8.59424 22.0764 8.41087C21.8462 8.2275 21.5671 8.11591 21.2739 8.08999L15.7061 7.60999L13.5236 2.41999C13.41 2.14766 13.2183 1.91504 12.9728 1.75142C12.7272 1.5878 12.4387 1.50049 12.1436 1.50049C11.8485 1.50049 11.5601 1.5878 11.3145 1.75142C11.0689 1.91504 10.8773 2.14766 10.7636 2.41999L8.58769 7.60999L3.01331 8.0928C2.71897 8.11754 2.43848 8.22862 2.20702 8.41213C1.97556 8.59564 1.80343 8.8434 1.71222 9.12434C1.62101 9.40528 1.61478 9.7069 1.6943 9.99138C1.77383 10.2758 1.93557 10.5305 2.15925 10.7234L6.38831 14.4191L5.12081 19.9072C5.05379 20.1944 5.07291 20.495 5.17579 20.7713C5.27867 21.0477 5.46075 21.2877 5.69924 21.4611C5.93774 21.6346 6.22209 21.7339 6.51672 21.7467C6.81136 21.7594 7.10322 21.685 7.35581 21.5328L12.1371 18.6266L16.9286 21.5328C17.1812 21.685 17.4731 21.7594 17.7677 21.7467C18.0623 21.7339 18.3467 21.6346 18.5852 21.4611C18.8237 21.2877 19.0058 21.0477 19.1086 20.7713C19.2115 20.495 19.2306 20.1944 19.1636 19.9072L17.8971 14.4134L22.1252 10.7234C22.3488 10.5298 22.5103 10.2745 22.5892 9.98938C22.6681 9.70431 22.6609 9.40227 22.5686 9.12124Z"
                    fill="#FFBC14"
                  ></path>
                </svg>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5686 9.12124C22.4778 8.84129 22.3066 8.59424 22.0764 8.41087C21.8462 8.2275 21.5671 8.11591 21.2739 8.08999L15.7061 7.60999L13.5236 2.41999C13.41 2.14766 13.2183 1.91504 12.9728 1.75142C12.7272 1.5878 12.4387 1.50049 12.1436 1.50049C11.8485 1.50049 11.5601 1.5878 11.3145 1.75142C11.0689 1.91504 10.8773 2.14766 10.7636 2.41999L8.58769 7.60999L3.01331 8.0928C2.71897 8.11754 2.43848 8.22862 2.20702 8.41213C1.97556 8.59564 1.80343 8.8434 1.71222 9.12434C1.62101 9.40528 1.61478 9.7069 1.6943 9.99138C1.77383 10.2758 1.93557 10.5305 2.15925 10.7234L6.38831 14.4191L5.12081 19.9072C5.05379 20.1944 5.07291 20.495 5.17579 20.7713C5.27867 21.0477 5.46075 21.2877 5.69924 21.4611C5.93774 21.6346 6.22209 21.7339 6.51672 21.7467C6.81136 21.7594 7.10322 21.685 7.35581 21.5328L12.1371 18.6266L16.9286 21.5328C17.1812 21.685 17.4731 21.7594 17.7677 21.7467C18.0623 21.7339 18.3467 21.6346 18.5852 21.4611C18.8237 21.2877 19.0058 21.0477 19.1086 20.7713C19.2115 20.495 19.2306 20.1944 19.1636 19.9072L17.8971 14.4134L22.1252 10.7234C22.3488 10.5298 22.5103 10.2745 22.5892 9.98938C22.6681 9.70431 22.6609 9.40227 22.5686 9.12124Z"
                    fill="#FFBC14"
                  ></path>
                </svg>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5686 9.12124C22.4778 8.84129 22.3066 8.59424 22.0764 8.41087C21.8462 8.2275 21.5671 8.11591 21.2739 8.08999L15.7061 7.60999L13.5236 2.41999C13.41 2.14766 13.2183 1.91504 12.9728 1.75142C12.7272 1.5878 12.4387 1.50049 12.1436 1.50049C11.8485 1.50049 11.5601 1.5878 11.3145 1.75142C11.0689 1.91504 10.8773 2.14766 10.7636 2.41999L8.58769 7.60999L3.01331 8.0928C2.71897 8.11754 2.43848 8.22862 2.20702 8.41213C1.97556 8.59564 1.80343 8.8434 1.71222 9.12434C1.62101 9.40528 1.61478 9.7069 1.6943 9.99138C1.77383 10.2758 1.93557 10.5305 2.15925 10.7234L6.38831 14.4191L5.12081 19.9072C5.05379 20.1944 5.07291 20.495 5.17579 20.7713C5.27867 21.0477 5.46075 21.2877 5.69924 21.4611C5.93774 21.6346 6.22209 21.7339 6.51672 21.7467C6.81136 21.7594 7.10322 21.685 7.35581 21.5328L12.1371 18.6266L16.9286 21.5328C17.1812 21.685 17.4731 21.7594 17.7677 21.7467C18.0623 21.7339 18.3467 21.6346 18.5852 21.4611C18.8237 21.2877 19.0058 21.0477 19.1086 20.7713C19.2115 20.495 19.2306 20.1944 19.1636 19.9072L17.8971 14.4134L22.1252 10.7234C22.3488 10.5298 22.5103 10.2745 22.5892 9.98938C22.6681 9.70431 22.6609 9.40227 22.5686 9.12124Z"
                    fill="#FFBC14"
                  ></path>
                </svg>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5686 9.12124C22.4778 8.84129 22.3066 8.59424 22.0764 8.41087C21.8462 8.2275 21.5671 8.11591 21.2739 8.08999L15.7061 7.60999L13.5236 2.41999C13.41 2.14766 13.2183 1.91504 12.9728 1.75142C12.7272 1.5878 12.4387 1.50049 12.1436 1.50049C11.8485 1.50049 11.5601 1.5878 11.3145 1.75142C11.0689 1.91504 10.8773 2.14766 10.7636 2.41999L8.58769 7.60999L3.01331 8.0928C2.71897 8.11754 2.43848 8.22862 2.20702 8.41213C1.97556 8.59564 1.80343 8.8434 1.71222 9.12434C1.62101 9.40528 1.61478 9.7069 1.6943 9.99138C1.77383 10.2758 1.93557 10.5305 2.15925 10.7234L6.38831 14.4191L5.12081 19.9072C5.05379 20.1944 5.07291 20.495 5.17579 20.7713C5.27867 21.0477 5.46075 21.2877 5.69924 21.4611C5.93774 21.6346 6.22209 21.7339 6.51672 21.7467C6.81136 21.7594 7.10322 21.685 7.35581 21.5328L12.1371 18.6266L16.9286 21.5328C17.1812 21.685 17.4731 21.7594 17.7677 21.7467C18.0623 21.7339 18.3467 21.6346 18.5852 21.4611C18.8237 21.2877 19.0058 21.0477 19.1086 20.7713C19.2115 20.495 19.2306 20.1944 19.1636 19.9072L17.8971 14.4134L22.1252 10.7234C22.3488 10.5298 22.5103 10.2745 22.5892 9.98938C22.6681 9.70431 22.6609 9.40227 22.5686 9.12124Z"
                    fill="#FFBC14"
                  ></path>
                </svg>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0307 1.75142C12.2762 1.5878 12.5647 1.50049 12.8598 1.50049V3.0078V7.94151V8.82243L12.8595 9.37512V9.75012L12.8598 11.2501L12.8595 13.5001V13.8751V14.6251V15.5626V16.5001V16.8751L12.8532 18.6266L8.072 21.5328C7.81941 21.685 7.52755 21.7594 7.23291 21.7467C6.93827 21.7339 6.65393 21.6346 6.41543 21.4611C6.17693 21.2877 5.99486 21.0477 5.89198 20.7713C5.7891 20.495 5.76998 20.1944 5.837 19.9072L7.1045 14.4191L2.87544 10.7234C2.65176 10.5305 2.49001 10.2758 2.41049 9.99138C2.33096 9.7069 2.3372 9.40528 2.42841 9.12434C2.51962 8.8434 2.69175 8.59564 2.92321 8.41213C3.15467 8.22862 3.43516 8.11754 3.7295 8.0928L9.30387 7.60999L11.4798 2.41999C11.5934 2.14766 11.7851 1.91504 12.0307 1.75142Z"
                    fill="#FFBC14"
                  ></path>
                  <path
                    d="M13.6873 1.75142C13.4418 1.5878 13.1533 1.50049 12.8582 1.50049V3.0078V7.94151V8.82243L12.8585 9.37512V9.75012L12.8582 11.2501L12.8585 13.5001V13.8751V14.6251V15.5626V16.5001V16.8751L12.8648 18.6266L17.646 21.5328C17.8986 21.685 18.1905 21.7594 18.4851 21.7467C18.7797 21.7339 19.0641 21.6346 19.3026 21.4611C19.5411 21.2877 19.7232 21.0477 19.826 20.7713C19.9289 20.495 19.948 20.1944 19.881 19.9072L18.6135 14.4191L22.8426 10.7234C23.0663 10.5305 23.228 10.2758 23.3075 9.99138C23.3871 9.7069 23.3808 9.40528 23.2896 9.12434C23.1984 8.8434 23.0263 8.59564 22.7948 8.41213C22.5633 8.22862 22.2829 8.11754 21.9885 8.0928L16.4141 7.60999L14.2382 2.41999C14.1246 2.14766 13.9329 1.91504 13.6873 1.75142Z"
                    fill="#E8EAE6"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-1 text-xs text-white">
              4.6 Stars | 3177 Google reviews
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}