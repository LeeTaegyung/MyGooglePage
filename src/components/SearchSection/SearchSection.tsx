import { IoSearch } from "react-icons/io5";

export default function SearchSection() {
  return (
    <section className="flex justify-center items-center shrink-0 p-6">
      <form
        action="https://www.google.com/search"
        className="flex items-center gap-2 w-full max-w-[600px] py-2 px-3 bg-white rounded-full common-shadow"
      >
        <IoSearch className="text-2xl" />
        <input
          type="text"
          name="q"
          placeholder="검색어를 입력해주세요."
          className="block w-full h-8 focus:outline-0"
        />
      </form>
    </section>
  );
}
