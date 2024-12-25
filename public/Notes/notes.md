# Note for Learning

## React Hook

### useState
-
    Syntax

        const [state, setState] = useState(initialState)
-
    Example

        const [count, setCount] = useState(0)
-
    Example for updating previous value using setter

        setCount((prevCountValue)=>{PrevCountValue= NewValue})
        
### useEffect
-
    Syntax

        useEffect(effect, dependencies)
-
    Example

        useEffect(() => {Statements},[Dependency]);
### useRef
-   syntax

        const ref = useRef(initialValue);
- Example

        const inputRef = useRef(null);
### useMemo
### useCallback

