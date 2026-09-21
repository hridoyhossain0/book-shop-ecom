
import { notFound } from "next/navigation";
import { DbBook } from "@/app/components/types/Type";
import Image from "next/image";

const getBook = async (): Promise<DbBook[]> => {
    const res = await fetch("http://localhost:4000/books");

    if (!res.ok) {
        throw new Error("Failed to fetch books");
    }

    return res.json();
};

interface BookDetailProps {
    params: Promise<{
        bookId: string;
    }>;
}

const BookDetailPage = async ({ params }: BookDetailProps) => {
    const { bookId } = await params;

    const booksData = await getBook();

    const book = booksData.find(
        (book) => String(book.id) === bookId
    );

    if (!book) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

                {/* Book Image */}
                <div className="flex min-h-[350px] items-center justify-center rounded-xl bg-gray-100 p-6 md:min-h-[480px]">
                    <div className="relative h-[350px] w-full md:h-[430px]">
                        <Image
                            src={book.thumbnail}
                            alt={book.title}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Book Information */}
                <div className="flex flex-col">

                    <h1 className="font-serif text-3xl font-bold md:text-4xl">
                        {book.title}
                    </h1>

                    <p className="mt-3 text-gray-700">
                        By : {book.author}
                    </p>

                    <div className="mt-5 border-y border-gray-200 py-4">
                        {book.category}
                    </div>

                    {/* Review */}
                    <div className="border-b border-gray-200 py-5">
                        <p className="text-sm leading-6 text-gray-600">
                            <span className="font-bold text-black">
                                Review:{" "}
                            </span>
                            {book.review}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-3 border-b border-gray-200 py-5">
                        <span className="text-sm font-bold">Tag</span>

                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-green-50 px-3 py-1 text-sm text-green-700"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Book Details */}
                    <div className="space-y-4 py-6 text-sm">
                        <div className="grid grid-cols-2">
                            <span className="text-gray-500">
                                Number of Pages:
                            </span>
                            <span className="font-semibold">
                                {book.pages}
                            </span>
                        </div>

                        <div className="grid grid-cols-2">
                            <span className="text-gray-500">
                                Publisher:
                            </span>
                            <span className="font-semibold">
                                {book.publisher}
                            </span>
                        </div>

                        <div className="grid grid-cols-2">
                            <span className="text-gray-500">
                                Year of Publishing:
                            </span>
                            <span className="font-semibold">
                                {book.yearOfPublishing}
                            </span>
                        </div>

                        <div className="grid grid-cols-2">
                            <span className="text-gray-500">
                                Rating:
                            </span>
                            <span className="font-semibold">
                                {book.rating}
                            </span>
                        </div>

                        <div className="grid grid-cols-2">
                            <span className="text-gray-500">
                                Price:
                            </span>
                            <span className="font-semibold">
                                ৳{book.price}
                            </span>
                        </div>

                        <div className="grid grid-cols-2">
                            <span className="text-gray-500">
                                Available Stock:
                            </span>
                            <span className="font-semibold">
                                {book.stock}
                            </span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-auto flex gap-3 pt-4">
                        <button
                            type="button"
                            className="rounded-md border border-gray-300 px-7 py-3 font-semibold hover:bg-gray-100"
                        >
                            Read
                        </button>

                        <button
                            type="button"
                            className="rounded-md bg-cyan-500 px-7 py-3 font-semibold text-white hover:bg-cyan-600"
                        >
                            Wishlist
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;