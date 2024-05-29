import { useSearchParams } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'

export const SearchInput = () => {
    const [search, setSearch] = useSearchParams()
    return (
        <div className='flex-grow relative'>
            <SearchIcon
                className='absolute right-2.5 top-1/2 -translate-y-1/2'
            />
            <Input
                defaultValue={search.get('q') || ''}
                onChange={e => setSearch({ q: e.target.value })}
            />
        </div>
    )
}
