// we are making a react hook which is solving following issiue
//  cache api data
//

const productCache = {};

function useCachehook(prodId: string) {
  const cachedvalue = productCache[prodId];
  const [data, setdata] = useState(cachedvalue ? cachedvalue : []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // if (productCache[prodId]) return productCache[id];
  useEffect(() => {
    const fetchProd = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/prod/${prodId}`);
        if (!response.ok) throw new Error("API call failed");
        const result = await response.json();

        if (cachedvalue === result) {
          productCache[prodId] = result;
          setdata(result);
        }
      } catch {
      } finally {
        setLoading(false);
      }
    };
  }, [prodId]);
  return { data, error, loading };
}
//////////////////////// how to use in compo

function prodDetail({ prodid }) {
  const { data, loading, error } = useCachehook(prodid);
}
