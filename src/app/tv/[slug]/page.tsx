import MovieDetailContainer from "@/app/containers/MovieDetailContainer";

export default async function MovieDetail({ params }: { params: Promise<{ slug: number }> }) {
    const { slug } = await params;
    console.log(slug)
    return (
        <MovieDetailContainer slug={slug} />
    );
}
