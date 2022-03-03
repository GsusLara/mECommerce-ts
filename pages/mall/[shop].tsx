import  { useRouter } from 'next/router';

type Props = {}

export default function Shop({}: Props) {
    const router = useRouter();
    const {shop} = router.query;
  return (
    <div>Esta es la tienda: {shop}</div>
  )
}