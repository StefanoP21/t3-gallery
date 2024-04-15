import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/8d162730-4c8c-41c1-a5a7-a1e47e867a9b-ijvnt4.png",
  "https://utfs.io/f/698393e4-7a72-4e67-aec1-63998f52cfd2-rjy6g0.png",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
