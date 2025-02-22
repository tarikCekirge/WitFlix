import MovieDetailContainer from "@/app/containers/MovieDetailContainer";

export default async function MovieDetail({ params }: { params: Promise<{ slug: number }> }) {
    const { slug } = await params;
    return (
        <MovieDetailContainer slug={slug} />
    );
}
