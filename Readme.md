Assignment #69
Вы разрабатываете систему учета студентов в университете. У вас есть объекты, представляющие студентов, и для каждого 
студента вы хотите хранить их текущие оценки. Создайте функцию, которая будет принимать объект студента и их оценки, а 
затем сохранять их в WeakMap.

Ваша задача:

Создайте новый экземпляр WeakMap.
Используя объект студента в качестве ключа, сохраните оценки в WeakMap.
Вы можете использовать метод set() для сохранения ключа-значения в WeakMap.
Примечание: WeakMap сохраняет ключи слабо, что означает, что если объект студента больше не используется в вашей
программе, WeakMap автоматически удалит связанные с ним оценки, не вызывая утечек памяти.

Удачи!
Пример входных данных:
const student = { name: 'Иван Иванов' };
const grades = { math: 90, fiz: 85, eng: 95 };


Пример вывода:
saveGrades(студент, оценки);