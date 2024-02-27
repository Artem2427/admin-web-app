import * as api from '@/api'
import Button from '@/components/button/Button'
import Filter from '@/components/filter/Filter'
import { Icon } from '@/components/icon/Icon'
import { ManagePromocodeModal } from '@/components/modals'
import { PageTitle } from '@/components/page-title/PageTitle'
import { SelectItem } from '@/components/select/Select'
import PromocodeTable, {
  Promocode,
} from '@/components/tables/promocode-table/PromocodeTable'
import { Input } from '@/components/ui/input'
import { CreatePromocodeDto, SortEnum, UpdatePromocodeDto } from '@/gql/graphql'
import { useDebounce } from '@/hooks/useDebounce'
import { usePagination } from '@/hooks/usePagination'
import { helperService } from '@/services/helper-service'
import {
  CreatePromocodeProps,
  EditPromocodeProps,
  PromocodeTableActionType,
  promocodeTableActions,
} from '@/types/promocode'
import { SortingState } from '@tanstack/react-table'
import {
  BaseSyntheticEvent,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useMutation, useQuery } from 'urql'

const Promocodes: FC = () => {
  const [sorting, setSorting] = useState<SortingState>([])
  const { pagination, setPagination } = usePagination()
  const [selectedAction, setSelectedAction] =
    useState<PromocodeTableActionType | null>(null)

  const [openManageModal, setOpenManageModal] = useState(false)

  const [searchValue, setSearchValue] = useState<string>('')
  const debounceSearchValue = useDebounce(searchValue)

  const [currencies, setCurrencies] = useState<SelectItem[]>([])
  const [selectedCurrency, setSelectedCurrency] = useState<SelectItem | null>(
    null,
  )

  const [selectedPromocode, setSelectedPromocode] = useState<Promocode | null>(
    null,
  )

  const [currenciesList] = useQuery({
    query: api.currency.getCurrencies,
  })

  const [promocodes, fetchPromocodes] = useQuery({
    query: api.promocode.getPromocodes,
    variables: {
      paginationInput: {
        currentPage: pagination.pageIndex + 1,
        perPage: pagination.pageSize,
      },
      filter: selectedCurrency
        ? {
            currencyId: Number(selectedCurrency.value),
          }
        : undefined,
      sort: sorting.length
        ? {
            sortMethod: sorting[0].desc ? SortEnum.Desc : SortEnum.Asc,
            value: sorting[0].id,
          }
        : undefined,
      search: debounceSearchValue,
    },
  })

  const [createPromocodeResult, executeCreatePromocode] = useMutation(
    api.promocode.createPromocode,
  )
  const [updatePromocodeResult, executeUpdatePromocode] = useMutation(
    api.promocode.updatePromocode,
  )
  const [deletePromocodeResult, executeDeletePromocode] = useMutation(
    api.promocode.deleteOnePromocode,
  )

  const handleOpenPromocodeModal = (action: PromocodeTableActionType) => {
    setSelectedAction(action)
    setOpenManageModal(true)
  }

  const handleChangeSearchValue = (event: BaseSyntheticEvent) => {
    setSearchValue(event.target.value)
  }

  const handleSelectCurrency = (value: string) => {
    const findSelectedCurrency = currencies.find(
      (currency) => currency.value === value,
    )

    if (findSelectedCurrency) {
      setSelectedCurrency(findSelectedCurrency)
    }
  }

  const handleClearCurrencyFilter = () => {
    setSelectedCurrency(null)
  }

  const handleCreatePromocode = useCallback(
    (createPromocodeInput: CreatePromocodeDto) => {
      executeCreatePromocode({ createPromocodeInput }).catch(console.error)
    },
    [executeCreatePromocode],
  )

  const handleOpenEditPromocode = (selectedPromocode: Promocode) => {
    setSelectedPromocode(selectedPromocode)
    handleOpenPromocodeModal(promocodeTableActions.edit)
  }

  const handleEditPromocode = useCallback(
    (updatePromocodeInput: UpdatePromocodeDto): void => {
      executeUpdatePromocode({ updatePromocodeInput }).catch(console.error)
    },
    [executeUpdatePromocode],
  )

  const handleDeletePromocode = (id: number): void => {
    executeDeletePromocode({ id }).catch(console.error)
  }

  const managePromocodeProps: (CreatePromocodeProps | EditPromocodeProps) & {
    title: string
  } = useMemo(() => {
    if (selectedAction === promocodeTableActions.create) {
      return {
        title: 'Create promocode',
        action: promocodeTableActions.create,
        onCreatePromocode: handleCreatePromocode,
      }
    }

    return {
      title: 'Edit promocode',
      action: promocodeTableActions.edit,
      promocode: selectedPromocode
        ? {
            id: selectedPromocode.id,
            promocodeName: selectedPromocode.promocodeName,
            activated: selectedPromocode.activated,
            currencyId: selectedPromocode.Currency.id,
            amount: selectedPromocode.amount,
          }
        : undefined,
      onEditPromocode: handleEditPromocode,
    }
  }, [
    selectedAction,
    selectedPromocode,
    handleCreatePromocode,
    handleEditPromocode,
  ])

  useEffect(() => {
    if (currenciesList.data && !currenciesList.fetching) {
      const newCurrencies: SelectItem[] = currenciesList.data.currencies.map(
        (currency) => ({
          value: String(currency.id),
          label: currency.code,
          id: String(currency.id),
          icon: helperService.transformCurrencyCodeToIcon(currency.code),
        }),
      )
      setCurrencies(newCurrencies)
    }
  }, [currenciesList])

  useEffect(() => {
    const { data, error, fetching } = createPromocodeResult
    if (data && !fetching) {
      // TODO create component
      fetchPromocodes({ requestPolicy: 'network-only' })
      // toast.show(api.createToastSuccess(`Promocode ${createPromocodeResult.data.promocodeCreate.promocodeName} was created successfully`))
    }

    if (error) {
      // TODO create component
      // toast.show(api.createToastError(error))
    }
  }, [createPromocodeResult, fetchPromocodes])

  useEffect(() => {
    const { data, error, fetching } = deletePromocodeResult

    if (data && !fetching) {
      // TODO create component
      // toast.show(api.createToastSuccess(`Promocode ${createPromocodeResult.data.promocodeCreate.promocodeName} was created successfully`))
    }

    if (error) {
      // TODO create component
      // toast.show(api.createToastError(error))
    }
  }, [deletePromocodeResult])

  useEffect(() => {
    const { data, error, fetching } = updatePromocodeResult

    if (data && !fetching) {
      // TODO create component
      // toast.show(api.createToastSuccess(`Promocode ${createPromocodeResult.data.promocodeCreate.promocodeName} was created successfully`))
    }

    if (error) {
      // TODO create component
      // toast.show(api.createToastError(error))
    }
  }, [updatePromocodeResult])

  return (
    <div className="flex flex-col">
      <PageTitle
        titles={['Promocode']}
        className="mb-[16px]"
        rightElement={
          <Button
            onClick={() =>
              handleOpenPromocodeModal(promocodeTableActions.create)
            }
            size="lg"
          >
            <Icon
              component="BonusAmount"
              className="mr-[8px] h-[16px] w-[16px]"
            />
            Create promocode
          </Button>
        }
      />
      <div className="flex items-center py-4 justify-between">
        <Input
          placeholder="Find promocode..."
          value={searchValue}
          onChange={handleChangeSearchValue}
          className="w-[320px]"
        />

        <Filter
          value={selectedCurrency?.value}
          items={currencies}
          placeholder="Select currency"
          onClearFilter={handleClearCurrencyFilter}
          onValueChange={handleSelectCurrency}
        />
      </div>

      <PromocodeTable
        sorting={sorting}
        pagination={pagination}
        loading={promocodes.fetching}
        canPrev={Boolean(promocodes.data?.promocodeFindAll.metadata.prev)}
        canNext={Boolean(promocodes.data?.promocodeFindAll.metadata.next)}
        data={promocodes.data?.promocodeFindAll.data || []}
        setSorting={setSorting}
        setPagination={setPagination}
        onDeletePromocode={handleDeletePromocode}
        onEditPromocode={handleOpenEditPromocode}
        onCreatePromocode={() =>
          handleOpenPromocodeModal(promocodeTableActions.create)
        }
      />

      <ManagePromocodeModal
        open={openManageModal}
        setOpen={setOpenManageModal}
        currencies={currencies}
        {...managePromocodeProps}
      />
    </div>
  )
}

export default Promocodes
