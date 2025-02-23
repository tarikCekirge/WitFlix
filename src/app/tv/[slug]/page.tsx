import TvDetailContainer from "@/app/containers/TvDetailContainer";

export default async function TvDetail({ params }: { params: Promise<{ slug: number }> }) {
    const { slug } = await params;
    console.log(slug)
    return (
        <TvDetailContainer slug={slug} />
    );
}
