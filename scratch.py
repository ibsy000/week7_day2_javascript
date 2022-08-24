def neg_int(array):
    neg_list = []

    for num in array:
        if num < 0:
            neg_list.append(num ** 2)
    return neg_list


print(neg_int([-10, -3, 4, -2, 8, 9, -3]))
print(neg_int([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]))
print(neg_int([2, 4, 6, 8, 10]))