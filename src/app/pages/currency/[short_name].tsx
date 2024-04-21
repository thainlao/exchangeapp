import { useRouter } from 'next/router';

export default function CurrencyPage() {
    const router = useRouter();
    const { short_name } = router.query;

    return (
        <div>
            <h1>{short_name}</h1>
        </div>
    );
}